import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { ButtonLink, ExternalButtonLink } from '@mono-nx-test-with-nextjs/ui';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: palette.primary.main,
      height: '75px',
    },
    link: {
      color: '#FFF',
    },
  })
);

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ButtonLink href="/instructions" variant="contained" color="secondary">
        Instructions
      </ButtonLink>
      <ButtonLink
        href="/assets/design/fe_movies_tech_test.pdf"
        variant="contained"
        color="secondary"
      >
        Design
      </ButtonLink>
      <ExternalButtonLink
        href="http://localhost:3333/swagger-doc"
        variant="contained"
        color="secondary"
      >
        Swagger
      </ExternalButtonLink>
      <ExternalButtonLink
        href="http://localhost:4400/"
        variant="contained"
        color="secondary"
      >
        Storybook
      </ExternalButtonLink>
    </footer>
  );
};

export default Footer;
