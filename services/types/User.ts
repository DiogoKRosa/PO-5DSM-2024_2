// src/types/User.ts
export interface User {
    id: number;
    name: string;
    email: string;
    dateOfBirth: Date;
    academic_year: string;
    attendance: {
        id: number;
        attendanceDate: Date;
        status: string;
    };
    academic_grade: number;
    // Adicione outros campos conforme a estrutura da sua API
}
