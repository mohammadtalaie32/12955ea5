import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CallsProvider } from './contexts/CallsContext';
import ActivityFeed from './components/ActivityFeed.jsx';
import ArchivedCalls from './components/ArchivedCalls.jsx';
import CallDetails from './components/CallDetails.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import ResetCalls from './components/ResetCalls.jsx';
import Layout from './components/Layout.jsx';
import { LayoutProvider } from './contexts/LayoutContext.js';

function App() {
  return (
    <React.StrictMode>
        <CallsProvider>
          <LayoutProvider>
            <Router>
              <ErrorBoundary>
                <Routes>
                  <Route path="/" element={<Layout />}>
                  <Route 
                    path="/" 
                    element={
                      <ActivityFeed 
                        // title="Active Calls"
                        archived={false}
                      />
                    } 
                  />
                  <Route 
                    path="/archived" 
                    element={
                      <ArchivedCalls 
                        title="Archived Calls"
                        archived={true}
                      />
                    } 
                  />
                  <Route 
                    path="/call/:id" 
                    element={<CallDetails />} 
                  />
                  <Route 
                    path="/reset" 
                    element={<ResetCalls />} 
                  />
                  </Route>
                
                </Routes>
              </ErrorBoundary>
            </Router>
          </LayoutProvider>
        </CallsProvider>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);

export default App;