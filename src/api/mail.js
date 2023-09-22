import keyBy from 'lodash/keyBy';
import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
// utils
import { endpoints, fetcher } from 'src/utils/axios';

// ----------------------------------------------------------------------

export function useGetLabels() {
  const URL = endpoints.mail.labels;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);

  console.log("DATA RETRIEVED FOR LABELS")
  console.log(data, 'data')

  const memoizedValue = useMemo(
    () => ({
      labels: data?.labels || [],
      labelsLoading: isLoading,
      labelsError: error,
      labelsValidating: isValidating,
      labelsEmpty: !isLoading && !data?.labels.length,
    }),
    [data?.labels, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// ----------------------------------------------------------------------

export function useGetMails(labelId) {
  // Modify the URL to point to your backend API for retrieving emails
  const URL = labelId ? `http://127.0.0.1:4000/emails?labelId=${labelId}` : null;

  const { data, isLoading, error, isValidating } = useSWR(URL, fetcher);
  console.log('usegetmails', data);
  // Log the entire data object

  const memoizedValue = useMemo(() => {
    const byId = keyBy(data || [], '_id') || {}; // Use data directly as an array
    const allIds = Object.keys(byId) || [];
    console.log('data', data);
    return {
      mails: {
        byId,
        allIds,
      },
      mailsLoading: isLoading,
      mailsError: error,
      mailsValidating: isValidating,
      mailsEmpty: !isLoading && !allIds.length,
    };
  }, [data, error, isLoading, isValidating]);

  return memoizedValue;
}


// ----------------------------------------------------------------------

export function useGetMail(mailId) {
  const URL = mailId ? `http://127.0.0.1:4000/emails/${mailId}` : null;
  console.log('URL', URL);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null); // Renamed the variable to 'fetchError' to avoid the conflict

  useEffect(() => {
    if (URL) {
      fetcher(URL)
        .then((responseData) => {
          setData(responseData);
          setIsLoading(false);
        })
        .catch((error) => {
          setFetchError(error); // Updated the variable name here as well
          setIsLoading(false);
        });
    } else {
      setData(null);
      setFetchError(null); // Updated the variable name here as well
      setIsLoading(false);
    }
  }, [URL]);

  console.log('data from backend', data); // Log the entire data object

  const memoizedValue = useMemo(() => {
    // Check if the data exists and contains the mail property
    const mailData = data || {};

    // Extract the email content from the mailData object
    const emailContent = {
      html: mailData.html || '',
      text: mailData.text || '',
      subject: mailData.subject || '',
      from: mailData.from || '',
      to: mailData.to || '',
      attachments: mailData.attachments || [],
    };

    return {
      mail: emailContent,
      mailLoading: isLoading,
      mailError: fetchError, // Updated the variable name here as well
      mailValidating: false, // Not provided by the backend, set to false
    };
  }, [data, fetchError, isLoading]); // Updated the variable name here as well

  return memoizedValue;
}


