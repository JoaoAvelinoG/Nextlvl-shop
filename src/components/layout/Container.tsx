type ContainerProps = {
  children: React.ReactNode;
} & React.ComponentProps<"div">;

export const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto">{children}</div>
    </>
  );
};
