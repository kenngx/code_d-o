using Microsoft.AspNetCore.Mvc;

namespace ExcelUploadReadDataSaveExampleCore.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }
    }
}
