const EventComponent: React.FC = () => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(`I'm being dragged`, event);
  };

  return (
    <div>
      <input onChange={onChangeHandler} />
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
