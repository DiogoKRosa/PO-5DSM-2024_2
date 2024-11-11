export interface User {
    id: number;
    name: string;
    email: string;
    ra: string;
    academicYear: string;
    attendanceList: {
      id: number;
      subjectEnumeration: string;
      sigla: string;
      attendanceDate: string;
      attendanceStatus: string;
    }[];
    classroom: {
      id: number;
      nameOfClass: string;
      grade: {
        id: number;
        nameGrade: string;
        sigla: string;
      }[];
    };
    gradeNotesList: {
      id: number;
      subject: string;
      atividade_um: number;
      atividade_dois: number;
      projeto_integrador: number;
      avaliacao_integradora: number;
      media: number;
    }[];
  }