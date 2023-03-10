using CsvHelper;
using Hospital_TECNologico.Models.Interfaces;
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
        private readonly IPatientModel _model;

        public PatientController(ILogger<PatientController> logger, IPatientModel patientModel)
        {
            _logger = logger;
            _model = patientModel;
        }

        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet("GetAllPatients",Name = "GetPatients")]
        public ActionResult<IEnumerable<PatientDto>> GetPatients()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var patients = _model.GetPatients();

            return Ok(patients);
        }

        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpPost("PostPatient",Name = "PostPatient")]
        public ActionResult<Result> PostPatient(PatientDto patient)
        {
            if (!ModelState.IsValid)
            {
                return Result.Error;
            }

            var patients = _model.PostPatient(patient);

            return patients;
        }

        
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet("GetPatientById",Name = "GetPatient")]
        public ActionResult<IEnumerable<PatientDto>> GetPatient([FromQuery] int id)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var patient = _model.GetPatientById(id);

            return Ok(patient);
        }
        


    }
}