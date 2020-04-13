//% color="#FF8C00" iconWidth=50 iconHeight=40
namespace esp_Motor{
    //% block="esep_Motor [A]init [B]" blockType="command" 
    //% A.shadow="dropdown"  A.options="A"
    //% B.shadow="number"  B.defl="90"
    export function esp_Motor1(parameter: any, block: any) {



        let a=parameter.A.code;
        let b=parameter.B.code;
        Generator.addInclude("esp_Motor1", "#include <Microbit_Motor1.h>");

        Generator.addObject(`esp_Motor1`,  "Microbit_Motor1",`esp;`);
        
        Generator.addCode(`esp.servo(${a}, ${b});`);
        

    }
    //% block="esep_Motor [C]init [D]QQQ[E]" blockType="command"  
    //% C.shadow="dropdown"  C.options="C"
    //% D.shadow="number"  D.defl="200"
    //% E.shadow="dropdown"  E.options="E"
    export function esp_Motor2(parameter: any, block: any) {
        let c=parameter.C.code;
        let d=parameter.D.code;
        let e=parameter.E.code;
        Generator.addInclude("esp_Motor1", "#include <Microbit_Motor1.h>");
        
        Generator.addCode(`esp.motorRun(${c}, ${e}, ${d});`);

    }

       //% block="esep_Motor [C]" blockType="command"  
    //% C.shadow="dropdown"  C.options="C"
    
    export function esp_Motor3(parameter: any, block: any) {
        let c=parameter.C.code;
        Generator.addInclude("esp_Motor1", "#include <Microbit_Motor1.h>");
        Generator.addObject(`esp_Motor1`,  "Microbit_Motor1",`esp;`);

        Generator.addCode(`esp.motorStop(${c});`);

    }
    //% block="esep_Motor [F][E][G][H]" blockType="command"  
    //% F.shadow="dropdown"  F.options="F"
    //% E.shadow="dropdown"  E.options="E"
    //% G.shadow="number"  G.defl="10"
    //% H.shadow="dropdown"  H.options="H"
    
    export function esp_Motor4(parameter: any, block: any) {
        let f=parameter.F.code;
        let e=parameter.E.code;
        let g=parameter.G.code;
        let h=parameter.H.code;
        Generator.addInclude("esp_Motor1", "#include <Microbit_Motor1.h>");
        Generator.addObject(`esp_Motor1`,  "Microbit_Motor1",`esp;`);

        Generator.addCode(`esp.${h}(${f},${e},  ${g});`);

    }
  
    
}
