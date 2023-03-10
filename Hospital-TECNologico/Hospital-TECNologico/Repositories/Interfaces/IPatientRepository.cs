using Hospital_TECNológico_Backend.Dtos;
using Nest;

namespace Hospital_TECNologico.Repositories.Interfaces
{
    public interface IPatientRepository
    {
        PatientDto GetPatientById(int patientId);

        List<PatientDto> GetPatients();

        Result InsertPatients(PatientDto patient);
    }
}
