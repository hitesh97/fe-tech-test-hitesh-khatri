import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export interface FilterMenuProps {}

const useStyles = makeStyles(({ palette }: Theme) => createStyles({}));

export const FilterMenu = (props: FilterMenuProps) => {
  const classes = useStyles();
  return <>testing</>;
};

export default FilterMenu;
