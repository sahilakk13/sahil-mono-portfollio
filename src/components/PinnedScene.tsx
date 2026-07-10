import { ReactNode, RefObject } from 'react';

type PinnedSceneProps = {
  className: string;
  children: ReactNode;
  refValue?: RefObject<HTMLElement>;
};

export default function PinnedScene({ className, children, refValue }: PinnedSceneProps) {
  return (
    <section className={className} ref={refValue}>
      <div className={`${className}__sticky`}>
        {children}
      </div>
    </section>
  );
}
