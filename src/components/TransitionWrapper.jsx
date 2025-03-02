import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const TransitionWrapper = ({ children }) => (
  <TransitionGroup>
    {children.map((child, index) => (
      <CSSTransition
        key={child.key}
        timeout={300}
        classNames="call"
      >
        {child}
      </CSSTransition>
    ))}
  </TransitionGroup>
);