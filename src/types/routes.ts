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
    Parameters = "/parameters",
}
enum UserRoutes {
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
}

export { Routes, BaseRoutes, UserRoutes, StaffRoutes, AdminRoutes };
