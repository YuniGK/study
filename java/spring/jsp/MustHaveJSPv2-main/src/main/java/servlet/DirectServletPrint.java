package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class DirectServletPrint extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = resp.getWriter();
      
        writer.println("<html>");
        writer.println("<head><title>DirectServletPrint</title></head>");
        writer.println("<body>");
        writer.println("<h2>서블릿에서 직접 출력합니다.</h2>");
        writer.println("<p>jsp로 포워드하지 않습니다.</p>");
        writer.println("</body>");
        writer.println("</html>");
        writer.close();
    }
}
