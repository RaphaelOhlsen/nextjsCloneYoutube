import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from 'src/theme';
import useSettings from 'src/hooks/useSettings';

export default function MyThemeProvider({ children }) {
  const { settings } = useSettings();
  const theme = createTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
