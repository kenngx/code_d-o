using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using LoginMVC.Models;
namespace LoginMVC.Controllers
{
    public class AccountController : Controller
    {

        LoginDbContext db = new LoginDbContext();
        StringProcess strPro = new StringProcess();
        Encryption encry = new Encryption();

        // GET: Account
        public ActionResult Index()
        {
            return View();
        }

        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            if (CheckSession() == 1)
            {
                return RedirectToAction("Index", "Home");
            }

            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult Login(Account acc, string returnUrl)
        {

            if(!string.IsNullOrEmpty(acc.UserName) && !string.IsNullOrEmpty(acc.Password))
            {
                using (var db = new LoginDbContext())
                {
                    var passToMD5 = encry.PasswordEncryption(acc.Password);
                    var account = db.Accounts.Where(m => m.UserName.Equals(acc.UserName) && m.Password.Equals(passToMD5)).Count();
                    if(account==1)
                    {
                        FormsAuthentication.SetAuthCookie(acc.UserName, false);
                            Session["idUser"] = acc.UserName;
                            Session["roleUser"] = acc.RoleID;
                        return RedirectToLocal(returnUrl);

                    }

                    ModelState.AddModelError("", "Login infomation is wrong.");
                }
            }
            ModelState.AddModelError("", "UserName and Password is required.");

            return View(acc);
        }
        private ActionResult RedirectToLocal (string returnUrl)
        {
           if(string.IsNullOrEmpty(returnUrl)||returnUrl=="/")
                    {
                if (CheckSession() == 1)
                {
                    return RedirectToAction("Index", "Home");
                }
            }
           if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }
        }
        private int CheckSession()
        {
            using (var db = new LoginDbContext())
                {
                var user = HttpContext.Session["idUser"];

                if (user != null)
                {
                    var role = db.Accounts.Find(user.ToString()).RoleID;

                    if (role != null)
                    {
                        return 1;
                    }
                }
            }
            return 0;
        }

    }
}