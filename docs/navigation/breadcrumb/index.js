import React from 'react';

import { Breadcrumb, BreadcrumbItem } from '../../../src/breadcrumb';

const BreadcrumbPage = () => (
  <div>
    <Breadcrumb>
      <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
      <BreadcrumbItem><a href="#">Features</a></BreadcrumbItem>
      <BreadcrumbItem disabled>Gene Splicing</BreadcrumbItem>
      <BreadcrumbItem>Cloning</BreadcrumbItem>
    </Breadcrumb>
  </div>
);

export default BreadcrumbPage;
