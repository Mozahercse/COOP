using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MemberController : ControllerBase
    {
        public IEnumerable<string> get(){
            return new string[]{"test 4","test 5","test 6","test 7","test 8","test 9","test 0"};
        }
    }
}