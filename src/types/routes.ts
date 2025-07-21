enum Routes {
    Base = "/base",
    User = "/user",
    Staff = "/staff",
    Admin = "/admin",
}
enum BaseRoutes {
    Competition = "/competition",
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
    GetUsers = "/getUsers",
    ManageUser = "/manageUser",
    ManageCompetition = "/manageCompetition",
}

export { Routes, BaseRoutes, UserRoutes, StaffRoutes, AdminRoutes };
