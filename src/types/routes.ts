enum Routes {
    Base = "/base",
    User = "/user",
    Staff = "/staff",
    Admin = "/admin",
}
enum BaseRoutes {
    GetCompetition = "/getCompetition",
    Competitions = "/competitions",
    LeaderBoard = "/leaderboard",
    GetParameters = "/getParameters",
}
enum UserRoutes {
    Validate = "/validate",
    Signin = "/signin",
    Login = "/login",
    AutoLogin = "/autologin",
    UpdateBlock = "/updateBlock",
}
enum StaffRoutes {
    RateSpecialBlock = "/rateSpecialBlock",
}
enum AdminRoutes {
    // Users
    GetUsers = "/getUsers",
    CreateUser = "/createUser",
    UpdateUser = "/updateUser",
    DeleteUser = "/deleteUser",

    // Competitions
    CreateCompetition = "/createCompetition",
    UpdateCompetition = "/updateCompetition",
    DeleteCompetition = "/deleteCompetition",
    CompetitionOvertime = "/competitionOvertime",

    // Parameters
    UpdateParameters = "/updateParameters",

    // Registers
    GetRegistries = "/getRegisters",
    CreateRegistry = "/createRegister",
    UpdateRegistry = "/updateRegister",
    DeleteRegistry = "/deleteRegister",
}

export { Routes, BaseRoutes, UserRoutes, StaffRoutes, AdminRoutes };
