//user model
export const userModel = (
  sequelize: {
    define: (
      arg0: string,
      arg1: {
        userName: { type: any; allowNull: boolean };
        email: {
          type: any;
          unique: boolean;
          isEmail: boolean; //checks for email format
          allowNull: boolean;
        };
        password: { type: any; allowNull: boolean };
      },
      arg2: { timestamps: boolean }
    ) => any;
  },
  DataTypes: { STRING: any }
) => {
  const User = sequelize.define(
    "user",
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, //checks for email format
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
  return User;
};
