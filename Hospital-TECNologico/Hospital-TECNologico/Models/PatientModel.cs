using Hospital_TECNológico_Backend.Dtos;
using Hospital_TECNológico_Backend.Repositories;
using Nest;

namespace Hospital_TECNológico_Backend.Models
{
    public class PatientModel
    {
        private readonly PatientRepository _patientRepository;
        public PatientModel(PatientRepository patientRepository)
        {
            _patientRepository = patientRepository;
        }

        public Result PostPatient(PatientDto patient)
        {
            var sendPatient = _patientRepository.InsertPatients(patient);
            if (!sendPatient.IsCompleted)
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
