import React, {useEffect, Suspense} from 'react';
import './App.css';


import Skeletonloader from "./components/SkeletonLoader";
import loadable, { lazy } from "@loadable/component";



import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    fetchContentsStart
} from "./redux/dept/actions";

import {
    selectIsLoading,
    selectListOfContents
} from "./redux/dept/selectors";

const Hero = lazy(() => import("./pages/dept/hero"));
const Content = lazy(() => import("./pages/dept/content"));
const Client = lazy(() => import("./pages/dept/client"));
const Question = lazy(() => import("./pages/dept/question"));
const Footer = lazy(() => import("./pages/dept/footer"));


const App = ({isLoading, listOfContents, fetchContents}) => {

  useEffect(() => {
        fetchContents()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div>
      <Suspense fallback={<Skeletonloader />}>
        <Hero />
        <Content listOfContents={listOfContents} isLoading={isLoading} />
        <Client />
        <Question />
        <Footer />
      </Suspense>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  listOfContents: selectListOfContents,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContents: () => dispatch(fetchContentsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


