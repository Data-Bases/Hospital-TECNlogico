using CsvHelper;
using Hospital_TECNológico_Backend.Dtos;
using Hospital_TECNológico_Backend.Helpers;
using Hospital_TECNológico_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Nest;
using System;
using System.Formats.Asn1;
using System.Globalization;
using System.IO;

namespace Hospital_TECNológico_Backend.Controllers
{
    [ApiController]
    [Route("Hospital/TECNoligco/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly ILogger<PatientController> _logger;

            


        public PatientController(ILogger<PatientController> logger)
        {
            _logger = logger;
        }

        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet(Name = "GetPatients")]
        public IEnumerable<PatientDto> GetPatients()
        {
            if (!ModelState.IsValid)
            {
                return (IEnumerable<PatientDto>)BadRequest(ModelState);
            }

            var patients = CsvHelperClass.GetAllPatients();

            return patients;
        }

        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost(Name = "PostPatient")]
        public Task PostPatient(PatientDto patient)
        {
            
            return CsvHelperClass.InsertPatients(patient); ;
        }

        /*
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet(Name = "GetPatient")]
        public ActionResult<IEnumerable<PatientDto>> GetPatient([FromQuery] int id)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var patient = _model.GetPatientById(id);

            return Ok(patient);
        }
        */


    }
}