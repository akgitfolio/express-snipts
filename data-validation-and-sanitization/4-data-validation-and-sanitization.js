const validate = [
  check("age")
    .custom((value) => {
      if (value < 18) {
        throw new Error("Age must be at least 18");
      }
      return true;
    }),
];
