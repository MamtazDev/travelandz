import isEqual from 'lodash/isEqual';
import { useState, useCallback, useEffect } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';
// _mock
import { PROJECT_STATUS_OPTIONS } from 'src/_mock';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { ConfirmDialog } from 'src/components/custom-dialog';
import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TableSelectedAction,
  TablePaginationCustom,
} from 'src/components/table';
import axios from 'axios';

//
import ProjectTableRow from '../project-table-row';
import ProjectTableToolbar from '../project-table-toolbar';
import ProjectTableFiltersResult from '../project-table-filters-result';
import { useCompany } from "src/components/session";


// ----------------------------------------------------------------------

const STATUS_OPTIONS = [{ value: 'all', label: 'All' }, ...PROJECT_STATUS_OPTIONS];

console.log("THE STATUS OPTIONS ARE ")
console.log(STATUS_OPTIONS)

const TABLE_HEAD = [
  { id: 'customer', label: 'Customer', width: 160 },
  { id: 'description', label: 'Description', width: 160 },
  { id: 'phase', label: 'Phase', width: 80 },
  { id: 'priority', label: 'Priority', width: 80 },
  { id: 'status', label: 'Status', width: 80 },
  { id: 'startDate', label: 'Start Date', width: 80 },
  { id: 'action', label: 'Action', width: 80 },
  { id: '', width: 10 },
];

const defaultFilters = {
  title: '',
  role: [],
  phase: 'needs',
};


async function fetchProjectList(companyId, maxRetries = 3, retryDelay = 1000) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      console.log("companyId is "+companyId)
      const response = await axios.get(`${process.env.REACT_APP_HOST_API}/projects/company/${companyId}`);
      console.log("response is ")
      console.log(response)
      return response.data;
    } catch (error) {
      console.error('Error fetching project list:', error);
      retries++;
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }

  return [];
}


// ----------------------------------------------------------------------

export default function ProjectListView() {

  const [projectList, setProjectList] = useState([]);
  const [roles, setRoles] = useState([]);
  const { companyId } = useCompany(); // Move this line outside of useEffect



  // Function to fetch project list and update state
  useEffect(() => {

    fetchProjectList(companyId)
      .then((data) => {
        // Get unique roles from the project list
        const uniqueRoles = [...new Set(data.map((project) => project.responsible))];

        // Update the roles state with the unique roles
        setRoles(uniqueRoles);

        // Update the project list state with the fetched data
        setProjectList(data);
      })
      .catch((error) => {
        console.error('Error fetching project list:', error);
      });
  }, []);

  useEffect(() => {
    setTableData(projectList);
  }, [projectList]);

  const table = useTable();

  const settings = useSettingsContext();

  const router = useRouter();

  const confirm = useBoolean();

  const [tableData, setTableData] = useState(projectList);

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });
  

  const dataInPage = dataFiltered.slice(
    table.page * table.rowsPerPage,
    table.page * table.rowsPerPage + table.rowsPerPage
  );

  const denseHeight = table.dense ? 52 : 72;

  const canReset = !isEqual(defaultFilters, filters);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleFilters = useCallback(
    (title, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [title]: value,
      }));
    },
    [table]
  );

  const handleDeleteRow = useCallback(
    (id) => {
      const deleteRow = tableData.filter((row) => row.id !== id);
      setTableData(deleteRow);

      table.onUpdatePageDeleteRow(dataInPage.length);
    },
    [dataInPage.length, table, tableData]
  );

  const handleDeleteRows = useCallback(() => {
    const deleteRows = tableData.filter((row) => !table.selected.includes(row.id));
    setTableData(deleteRows);

    table.onUpdatePageDeleteRows({
      totalRows: tableData.length,
      totalRowsInPage: dataInPage.length,
      totalRowsFiltered: dataFiltered.length,
    });
  }, [dataFiltered.length, dataInPage.length, table, tableData]);

  const handleEditRow = useCallback(
    (id) => {
      router.push(paths.dashboard.project.edit(id));
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event, newValue) => {
      handleFilters('phase', newValue);
    },
    [handleFilters]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <CustomBreadcrumbs
          heading="Project List"
          links={[
            { name: 'Dashboard', href: paths.dashboard.root },
            { name: 'Project', href: paths.dashboard.project.root },
            { name: 'List' },
          ]}
          action={
            <Button
              component={RouterLink}
              href={paths.dashboard.project.new}
              variant="contained"
              startIcon={<Iconify icon="mingcute:add-line" />}
            >
              New Project
            </Button>
          }
          sx={{
            mb: { xs: 3, md: 5 },
          }}
        />

        <Card>

          <Tabs
            value={filters.phase}
            onChange={handleFilterStatus}
            sx={{
              px: 2.5,
              boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
            }}
          >
            {STATUS_OPTIONS.map((tab) => (
              <Tab
                key={tab.value}
                iconPosition="end"
                value={tab.value}
                label={tab.label}
                icon={
                  <Label
                    variant={
                      ((tab.value === 'all' || tab.value === filters.phase) && 'filled') || 'soft'
                    }
                    color={
                      (tab.value === 'needs' && 'success') ||
                      (tab.value === 'proposal' && 'warning') ||
                      (tab.value === 'pre-booking' && 'error') ||
                      (tab.value === 'booking' && 'success') ||
                      (tab.value === 'pre-travel' && 'warning') ||
                      (tab.value === 'in-travel' && 'error') ||
                      (tab.value === 'post-travel' && 'success') ||
                      'default'
                    }
                  >
                    {tab.value === 'all' && projectList.length}
                    {tab.value === 'needs' &&
                      projectList.filter((project) => project.phase === 'needs').length}
                    {tab.value === 'proposal' &&
                      projectList.filter((project) => project.phase === 'proposal').length}
                    {tab.value === 'pre-booking' &&
                      projectList.filter((project) => project.phase === 'pre-booking').length}
                    {tab.value === 'booking' &&
                      projectList.filter((project) => project.phase === 'booking').length}
                    {tab.value === 'pre-travel' &&
                      projectList.filter((project) => project.phase === 'pre-travel').length}
                    {tab.value === 'in-travel' &&
                      projectList.filter((project) => project.phase === 'in-travel').length}
                    {tab.value === 'post-travel' &&
                      projectList.filter((project) => project.phase === 'post-travel').length}
                  </Label>
                }
              />
            ))}
          </Tabs>

          <ProjectTableToolbar filters={filters} onFilters={handleFilters} roleOptions={roles} />

          {canReset && (
            <ProjectTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

          <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
            <TableSelectedAction
              dense={table.dense}
              numSelected={table.selected.length}
              rowCount={tableData.length}
              onSelectAllRows={(checked) =>
                table.onSelectAllRows(
                  checked,
                  tableData.map((row) => row._id)
                )
              }
              action={
                <Tooltip title="Delete">
                  <IconButton color="primary" onClick={confirm.onTrue}>
                    <Iconify icon="solar:trash-bin-trash-bold" />
                  </IconButton>
                </Tooltip>
              }
            />

            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                  onSort={table.onSort}
                  onSelectAllRows={(checked) =>
                    table.onSelectAllRows(
                      checked,
                      tableData.map((row) => row.id)
                    )
                  }
                />

                <TableBody>
                  {dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                    .map((row) => (
                      <ProjectTableRow
                        key={row._id}
                        row={row}
                        selected={table.selected.includes(row._id)}
                        onSelectRow={() => table.onSelectRow(row._id)}
                        onDeleteRow={() => handleDeleteRow(row._id)}
                        onEditRow={() => handleEditRow(row._id)}
                      />
                    ))}

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
      </Container>

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content={
          <>
            Are you sure want to delete <strong> {table.selected.length} </strong> items?
          </>
        }
        action={
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleDeleteRows();
              confirm.onFalse();
            }}
          >
            Delete
          </Button>
        }
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters }) {
  const { title, phase, role } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);
  
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (title) {
    inputData = inputData.filter(
      (project) => project.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
    );
  }

  if (phase !== 'all') {
    inputData = inputData.filter((project) => project.phase === phase);
  }

  if (role.length) {
    inputData = inputData.filter((project) => role.includes(project.responsible.name));
  }

  return inputData;
}

