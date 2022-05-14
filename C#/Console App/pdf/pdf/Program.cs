using iTextSharp.text;
using iTextSharp.text.pdf;
using System.IO;

namespace pdf
{
    class Program
    {
        static void main(string[] args)
        {
            //Đường dẫn tới file pdf
            string pdfFilePath = @"C:\Users\Tuan Anh\Desktop\New folder\LISTENING.pdf";
            //Đường dẫn tới thư mục chưa file pdf đã cắt
            string outputPath = @"C:\Users\Tuan Anh\Desktop\New folder\Splited";
            int interval = 2; // số trang muốn cắt.
            int pageNameSuffix = 0;

            PdfReader reader = new PdfReader(pdfFilePath);
            FileInfo file = new FileInfo(pdfFilePath);

            string pdfFileName = file.Name.Substring(0, file.Name.LastIndexOf(".")) + "-";

            Program obj = new Program();

            for (int pageNumber = 1; pageNumber <= reader.NumberOfPages; pageNumber+= interval)
            {
                pageNameSuffix++;
                string newPdfFileName = string.Format(pdfFileName + "{0}", pageNameSuffix);
                obj.Split(pdfFilePath, outputPath, pageNumber, interval, newPdfFileName);
            }
            
            }
    private void Split (String pdfFilePath, string outputPath, string pdfFileName, int startPage, int interval)
        {
            int i = 0;
            using (PdfReader reader = new PdfReader(pdfFilePath))
            {
                Document document = new Document();
                PdfCopy copy = new PdfCopy(document, new FileStream(outputPath + "\\" + pdfFileName + ".pdf", FileMode.Create));

                for (int pageNumber = i * interval + startPage; pageNumber < (i * interval + startPage + interval); pageNumber++)
                {
                    //gán pageNumber = 0 x 2 + startPage = 1 tức là tính từ trang thứ 1
                    //điều kiện thứ 2: 0 x 2 + 1 + 2 = 3
                    //tức là thằng pageNumber vòng lặp đầu tiên sẽ chạy từ 1 tới số nhỏ hơn 3
                    //Tức là file pdf sẽ được cắt 2 trang

                    if (reader.NumberOfPages >= pageNumber)
                    {
                        copy.AddPage(copy.GetImportedPage(reader,pageNumber));
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
