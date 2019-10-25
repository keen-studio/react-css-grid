import React from 'react';
import PropTypes from 'prop-types';
import GridContext from '../GridProvider/context';

const Grid = (props) => {
  const {
    id,
    className,
    children,
    style,
    htmlElement: HtmlElement,
  } = props;

  return (
    <GridContext.Consumer>
      {(gridContext) => {
        const {
          hCount,
          hCountOverrides: {
            xs, s, m, l, xl,
          } = {},
          classPrefix,
        } = gridContext;

        const baseClass = `${classPrefix}__grid`;

        const classes = [
          className,
          `${baseClass}`,
          `${baseClass}--hcount-${hCount}`,
          xs && `${baseClass}--hcount-xs-${xs}`,
          s && `${baseClass}--hcount-s-${s}`,
          m && `${baseClass}--hcount-m-${m}`,
          l && `${baseClass}--hcount-l-${l}`,
          xl && `${baseClass}--hcount-xl-${xl}`,
        ].filter(Boolean).join(' ');

        return (
          <HtmlElement
            id={id}
            className={classes}
            style={{ ...style }}
          >
            {children}
          </HtmlElement>
        );
      }}
    </GridContext.Consumer>
  );
};


Grid.defaultProps = {
  id: undefined,
  className: undefined,
  style: {},
  htmlElement: 'div',
};

Grid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(
      PropTypes.node,
    ),
  ]).isRequired,
  style: PropTypes.shape({}),
  htmlElement: PropTypes.oneOf([
    'div',
    'nav',
    'span',
    'section',
    'article',
  ]),
};

export default Grid;
