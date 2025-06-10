import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [
    {
      id: 1,
      title: "SEO Optimization",
      description: "Improve your site's ranking.",
    },
    {
      id: 2,
      title: "PPC Advertising",
      description: "Run targeted ads to maximize ROI.",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "Boost engagement across platforms.",
    },
  ],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
