using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ResortDTN.Startup))]
namespace ResortDTN
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
