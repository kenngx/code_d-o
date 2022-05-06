using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Web_News.Areas.Customer.Controllers
{
    [Authorize(Roles = "Customer")]
    public class HomeCustomerController : Controller
    {
        // GET: Customer/HomeCustomer
        public ActionResult Index()
        {
            return View();
        }
    }
}