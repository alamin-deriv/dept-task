import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css'

export default function Skeletonloader() {
  return (
    <div style={{width: "100%"}}>
      <div style={{width: "100%", margin: "30px"}}>
        <SkeletonTheme color="#d0d5d933" highlightColor="#c2cad133">
          <Skeleton count={15} height={30} />
        </SkeletonTheme>
      </div>
    </div>
  );
}