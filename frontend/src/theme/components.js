const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
      },
      containedSecondary: {
        color: '#00001E',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
      input: {
        borderRadius: 5,
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 5,
      },
    },
  },
};

export default components;
