# npm install -g javascript-obfuscator
# where javascript-obfuscator

import subprocess

def obfuscate_js(input_file, output_file):
    # Replace this with the actual full path obtained from the previous step
    obfuscator_path = r'C:\Users\irole\AppData\Roaming\npm\javascript-obfuscator.cmd'
    
    try:
        result = subprocess.run([obfuscator_path, input_file, '--output', output_file], check=True)
        print(f"Obfuscation completed: {result}")
    except subprocess.CalledProcessError as e:
        print(f"Obfuscation failed: {e}")
    except FileNotFoundError:
        print("javascript-obfuscator not found. Please ensure it is installed and in your PATH.")

def main():
    input_file = 'script.js'
    output_file = 'script2.js'
    obfuscate_js(input_file, output_file)
    print(f'Obfuscated JavaScript has been saved to {output_file}')

if __name__ == '__main__':
    main()
