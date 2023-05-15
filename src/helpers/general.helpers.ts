const parseBool = (value: string): boolean | undefined => {
  switch (value?.toLowerCase()) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return undefined;
  }
};

export { parseBool };
