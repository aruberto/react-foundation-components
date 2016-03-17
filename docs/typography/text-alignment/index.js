import React from 'react';

import { TextAlignment } from '../../../src/text-alignment';

const TextAlignmentPage = () => (
  <div>
    <TextAlignment alignment="left">
      <b>This text is left-aligned.</b> Set in the year 0 F.E. ("Foundation Era"), The
      Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire.
      Though the empire appears stable and powerful, it is slowly decaying in ways that parallel
      the decline of the Western Roman Empire.
    </TextAlignment>
    <br />
    <TextAlignment alignment="right">
      <b>This text is right-aligned.</b> Set in the year 0 F.E. ("Foundation Era"), The
      Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire.
      Though the empire appears stable and powerful, it is slowly decaying in ways that parallel
      the decline of the Western Roman Empire.
    </TextAlignment>
    <br />
    <TextAlignment alignment="center">
      <b>This text is center-aligned.</b> Set in the year 0 F.E. ("Foundation Era"), The
      Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire.
      Though the empire appears stable and powerful, it is slowly decaying in ways that parallel
      the decline of the Western Roman Empire.
    </TextAlignment>
    <br />
    <TextAlignment alignment="justify">
      <b>This text is justified.</b> Set in the year 0 F.E. ("Foundation Era"), The
      Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire.
      Though the empire appears stable and powerful, it is slowly decaying in ways that parallel
      the decline of the Western Roman Empire.
    </TextAlignment>
    <br />
    <TextAlignment alignment="left" largeAlignment="right">
      <b>This text is right-aligned on large screen or larger.</b> Set in the year 0 F.E.
      ("Foundation Era"), The Psychohistorians opens on Trantor, the capital of the
      12,000-year-old Galactic Empire. Though the empire appears stable and powerful, it is
      slowly decaying in ways that parallel the decline of the Western Roman Empire.
    </TextAlignment>
  </div>
);

export default TextAlignmentPage;
