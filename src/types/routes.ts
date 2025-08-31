enum Routes {
    Base = "/base",
    User = "/user",
    Staff = "/staff",
    Admin = "/admin",
}
enum BaseRoutes {
    LeaderBoard = "/leaderboard",
    GetParameters = "/getParameters",

    //_____ TORNEOS _ WIP _____

    /** @deprecated TORNEOS - WIP */
    GetCompetition = "/getCompetition",
    /** @deprecated TORNEOS - WIP */
    Competitions = "/competitions",
}
enum UserRoutes {
    Signin = "/signin",
    Login = "/login",
    AutoLogin = "/autologin",
    UpdateBlock = "/updateBlock",

    //_____ TORNEOS _ WIP _____

    /** @deprecated TORNEOS - WIP */
    /** @deprecated TORNEOS - WIP */
    Validate = "/validate",
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

    // Parameters
    UpdateParameters = "/updateParameters",

    //_____ TORNEOS _ WIP _____

    // Competitions
    /** @deprecated TORNEOS - WIP */
    CreateCompetition = "/createCompetition",
    /** @deprecated TORNEOS - WIP */
    UpdateCompetition = "/updateCompetition",
    /** @deprecated TORNEOS - WIP */
    DeleteCompetition = "/deleteCompetition",
    /** @deprecated TORNEOS - WIP */
    CompetitionOvertime = "/competitionOvertime",

    // Registers
    /** @deprecated TORNEOS - WIP */
    GetRegistries = "/getRegisters",
    /** @deprecated TORNEOS - WIP */
    CreateRegistry = "/createRegister",
    /** @deprecated TORNEOS - WIP */
    UpdateRegistry = "/updateRegister",
    /** @deprecated TORNEOS - WIP */
    DeleteRegistry = "/deleteRegister",
}

export { Routes, BaseRoutes, UserRoutes, StaffRoutes, AdminRoutes };
