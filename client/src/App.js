import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Switch } from "react-router-dom";
import ApolloProvider from "./ApolloProvider";
import "./App.scss";
import Home from "./pages/home/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { AuthProvider } from "./context/auth";
import { MessageProvider } from "./context/message";
import DynamicRoute from "./util/DynamicRoute";

//The App component represents the root component of the application.
// It sets up the main structure and routing of the app.
function App() {
  return (
    // Provide the Apollo Client instance
    <ApolloProvider>
      {/* Provide authentication-related functionality */}
      <AuthProvider>
        {/* Provide messaging-related functionality */}
        <MessageProvider>
          {/* Enable client-side routing */}
          <BrowserRouter>
            {/* UI container with top padding */}
            <Container className="pt-5">
              {/* Render the first matching route */}
              <Switch>
                {/* Render Home component for authenticated users */}
                <DynamicRoute exact path="/" component={Home} authenticated />
                {/* Render Register component for guest users */}
                <DynamicRoute path="/register" component={Register} guest />
                {/* Render Login component for guest users */}
                <DynamicRoute path="/login" component={Login} guest />
              </Switch>
            </Container>
          </BrowserRouter>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
