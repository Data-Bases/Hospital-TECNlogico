using Hospital_TECNologico.Models.Interfaces;
using Hospital_TECNologico.Repositories.Interfaces;
using Hospital_TECNológico_Backend.Dtos;
using Nest;

namespace Hospital_TECNológico_Backend.Models
{
    public class PatientModel : IPatientModel
    {
        private readonly ILogger<PatientModel> _logger;
        private readonly IPatientRepository _patientRepository;
        public PatientModel(ILogger<PatientModel> logger, IPatientRepository patientRepository)
        {
            _logger = logger;
            _patientRepository = patientRepository;
        }

        public Result PostPatient(PatientDto patient)
        {
            var sendPatient = _patientRepository.InsertPatients(patient);
            if (!sendPatient.Equals(1))
            {
                return Result.Error;
            }
            return Result.Created;
        }

        public PatientDto GetPatientById(int id)
        {   
            var getPatientFromId = _patientRepository.GetPatientById(id);
            if (getPatientFromId == null)
            {
                return new PatientDto();
            }
            return getPatientFromId;
        }

        public IEnumerable<PatientDto> GetPatients()
        {
            var patients = _patientRepository.GetPatients();
            if (patients == null)
            {
                return new List<PatientDto>();
            }
            return patients;
        }
    }
}
