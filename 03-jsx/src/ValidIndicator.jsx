const ValidIndicator = () => {
  const isValid = true;
  return (
    <div className="flex justify-center text-2xl">{isValid ? 'valid' : 'not valid'} </div>
  );
};

export default ValidIndicator;
