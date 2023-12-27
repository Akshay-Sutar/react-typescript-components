import { ChildFC } from './Child';

const Parent = () => {
  return (
    <ChildFC color="teal" onClick={() => console.log('Clicked')}>
      Child
    </ChildFC>
  );
};

export default Parent;
