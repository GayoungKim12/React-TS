interface Flex extends React.ComponentProps<"div"> {}

const styles = "flex flex-row justify-center items-center gap-2 ";

const Flex = ({ ...props }: Flex) => {
  return <div {...props} className={styles + props.className} />;
};

export default Flex;
