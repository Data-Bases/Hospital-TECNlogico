using Hospital_TECNológico_Backend.Dtos;
using Nest;

namespace Hospital_TECNologico.Models.Interfaces
{
    public interface IPatientModel
    {
        Result PostPatient(PatientDto patient);

        PatientDto GetPatientById(int id);

        public IEnumerable<PatientDto> GetPatients();
    }
}
