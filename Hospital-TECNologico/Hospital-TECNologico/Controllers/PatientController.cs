using CsvHelper;
using Hospital_TECNologico.Models.Interfaces;
using Hospital_TECNológico_Backend.Dtos;
using Hospital_TECNológico_Backend.Helpers;
using Hospital_TECNológico_Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Nest;
using System;
using System.ComponentModel.DataAnnotations;
using System.Formats.Asn1;
using System.Globalization;
using System.IO;

namespace Hospital_TECNológico_Backend.Controllers
{
    [ApiController]
    [Route("hospital/tecnoligco/[controller]")]
    public class PatientController : ControllerBase
    {
        private readonly ILogger<PatientController> _logger;
        private readonly IPatientModel _model;

        public PatientController(ILogger<PatientController> logger, IPatientModel patientModel)
        {
            _logger = logger;
            _model = patientModel;
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [HttpGet("GetAllPatients",Name = "GetPatients")]
        public ActionResult<IEnumerable<PatientDto>> GetPatients()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var patients = _model.GetPatients();

            if (patients == new List<PatientDto>())
            {
                return NotFound();
            }

            return Ok(patients);
        }

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
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

        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet("GetPatientById/{id}",Name = "GetPatient")]
        public ActionResult<IEnumerable<PatientDto>> GetPatient([Required] int id)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var patient = _model.GetPatientById(id);

            if (patient == null)
            {
                return NotFound();
            }

            return Ok(patient);
        }
        


    }
}