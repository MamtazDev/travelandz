import { createContext, useContext, useState } from 'react';

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyId, setCompanyId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState(null);
  const [token, setToken] = useState(null);

  const updateUserContext = (userData) => {
    console.log('userData', userData)
    setCompanyId(userData.company);
    setUserId(userData._id);
    setUserName(userData.name);
    setToken(userData.token);
  };

  return (
    <CompanyContext.Provider value={{ companyId, userId, userName, token, updateUserContext }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  const companyContext = useContext(CompanyContext);

  if (!companyContext) {
    throw new Error('useCompany must be used within a CompanyProvider');
  }

  return companyContext;
};
