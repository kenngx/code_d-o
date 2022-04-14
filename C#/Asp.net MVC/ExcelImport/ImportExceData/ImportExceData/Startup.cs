using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ImportExceData.Startup))]
namespace ImportExceData
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
