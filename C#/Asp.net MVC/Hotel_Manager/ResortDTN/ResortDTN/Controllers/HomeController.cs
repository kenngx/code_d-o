using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ResortDTN.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        // GET: DoAnWeb/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DoAnWeb/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DoAnWeb/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: DoAnWeb/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DoAnWeb/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: DoAnWeb/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DoAnWeb/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        public ActionResult GioiThieu()
        {
            return View();
        }
        public ActionResult Phong()
        {
            return View();
        }
        public ActionResult TinTuc()
        {
            return View();
        }
        public ActionResult HinhAnh()
        {
            return View();
        }
        public ActionResult Bank()
        {
            return View();
        }
        public ActionResult Pagebooking_filter_child()
        {
            return View();
        }
        public ActionResult KhuyenMai()
        {
            return View();
        }
        public ActionResult EnIndex()
        {
            return View();
        }
        public ActionResult ThongTin()
        {
            return View();
    }
        public ActionResult Admin()
        {
            return View();
        }
    }
    
}