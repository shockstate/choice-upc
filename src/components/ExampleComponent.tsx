interface ExampleComponentProps {
    textToShow: string;
}

const ExampleComponent = (props: ExampleComponentProps) => {
  return (
    <>
      <div>
        {props.textToShow}
      </div>
    </>
  );
};

export default ExampleComponent;
