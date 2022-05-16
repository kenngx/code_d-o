using iTextSharp.text;
using iTextSharp.text.pdf;
using System.IO;

namespace Split
{
    class Program
    {
        static void Main(string[] args)
        {
            string pdfFilePath = @"C:\Users\Tuan Anh\Desktop\New folder\LISTENING.pdf"; //đường dẫn tới file gốc
            string outputPath = @"C:\Users\Tuan Anh\Desktop\New folder\Splited";           //Đường dẫn file xuất
            int interval = 2;                            //Số trang muốn split
            int pageNameSuffix = 0;
            PdfReader reader = new PdfReader(pdfFilePath);

            FileInfo file = new FileInfo(pdfFilePath);
            string pdfFileName = file.Name.Substring(0, file.Name.LastIndexOf(".")) + "-";

            Program obj = new Program();

            for (int pageNumber = 1; pageNumber <= reader.NumberOfPages; pageNumber += interval)
            {
                pageNameSuffix++;
                string newPdfFileName = string.Format(pdfFileName + "{0}", pageNameSuffix);
                obj.Split(pdfFilePath, outputPath, pageNumber, interval, newPdfFileName);
            }
        }

        private void Split(string pdfFilePath, string outputPath, int startPage, int interval, string pdfFileName)
        {

            int i = 0;
            using (PdfReader reader = new PdfReader(pdfFilePath))
            {
                Document document = new Document();
                PdfCopy copy = new PdfCopy(document, new FileStream(outputPath + "\\" + pdfFileName + ".pdf", FileMode.Create));
                document.Open();

                for (int pagenumber = i * interval + startPage; pagenumber < (i * interval + startPage + interval); pagenumber++)
                {
                    if (reader.NumberOfPages >= pagenumber)
                    {
                        copy.AddPage(copy.GetImportedPage(reader, pagenumber));
                    }
                    else
                    {
                        break;
                    }

                }

                document.Close();
            }
            
        }
    }
}