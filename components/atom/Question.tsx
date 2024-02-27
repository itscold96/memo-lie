interface QuestionProps {
  content: string;
  className: string;
  prefix?: string;
}

function Question(props: QuestionProps) {
  return (
    <p className={props.className}>
      {props.prefix && props.prefix + ' '}
      {props.content}
    </p>
  );
}

export default Question;
