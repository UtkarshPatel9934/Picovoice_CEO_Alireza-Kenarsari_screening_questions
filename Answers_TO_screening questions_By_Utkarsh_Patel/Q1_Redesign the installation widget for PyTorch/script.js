'use strict';

var select_PyTorch_Build_Options = document.getElementById('PyTorch_Build');
var select_buttons_YourOS_Options = document.getElementById('YourOS');
var select_buttons_Package_Options = document.getElementById('buttons_Package');
var select_buttons_Language_Options = document.getElementById('buttons_Language');
var select_buttons_Compute_Platform_Options = document.getElementById('buttons_Compute_Platform');


/* select Input : Get Command btn */
let selectInput = document.querySelector('input');
/* select Input : Get Command btn */


selectInput.addEventListener('click', ()=>{
	var value_for_PyTorch_Build = select_PyTorch_Build_Options.options[select_PyTorch_Build_Options.selectedIndex].value;

	var value_for_YourOS = select_buttons_YourOS_Options.options[select_buttons_YourOS_Options.selectedIndex].value;

	var value_for_Package = select_buttons_Package_Options.options[select_buttons_Package_Options.selectedIndex].value;

	var value_for_Language = select_buttons_Language_Options.options[select_buttons_Language_Options.selectedIndex].value;

	var value_for_Compute_Platform = select_buttons_Compute_Platform_Options.options[select_buttons_Compute_Platform_Options.selectedIndex].value;



	// alert(value_for_PyTorch_Build + " " + value_for_YourOS + " " + value_for_Package + " " + value_for_Language + " " + value_for_Compute_Platform);

	// let saveUserInputs = `${value_for_PyTorch_Build},${value_for_Package},${value_for_YourOS},${value_for_Compute_Platform},${value_for_Language}`;
	
	let saveUserInputs = value_for_PyTorch_Build + "," + value_for_Package + "," + value_for_YourOS + "," + value_for_Compute_Platform + "," + value_for_Language;



	console.log(saveUserInputs);
	// commandToRun(saveUserInputs);

	// console.log(object[saveUserInputs]);

	let select_CommandContainer = document.querySelector('#command');

	if(object[saveUserInputs])
	{
		select_CommandContainer.innerHTML = object[saveUserInputs];
	}
	else{
		select_CommandContainer.innerHTML =  "<pre> # Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source </pre>";
	}
} )






/* Assigns Command according to selected */

	var object = {
		"preview,pip,linux,accnone,python": "pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html",


		"preview,pip,linux,cuda10.2,python": "pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cu102/torch_nightly.html",


		"preview,pip,linux,cuda11.x,python": "pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cu113/torch_nightly.html",


		"preview,pip,linux,rocm4.2,python": "pip3 install --pre torch torchvision -f https://download.pytorch.org/whl/nightly/rocm4.2/torch_nightly.html",


		"preview,conda,linux,cuda10.2,python": "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-nightly",


		"preview,conda,linux,cuda11.x,python": "conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch-nightly",


		"preview,conda,linux,rocm4.2,python": "<b>NOTE:</b> Conda packages are not currently available for ROCm, please use pip instead<br />",


		"preview,conda,linux,accnone,python": "conda install pytorch torchvision torchaudio cpuonly -c pytorch-nightly",


		"preview,libtorch,linux,accnone,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-shared-with-deps-latest.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-cxx11-abi-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-cxx11-abi-shared-with-deps-latest.zip</a>",

		
		"preview,libtorch,linux,cuda10.2,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu102/libtorch-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu102/libtorch-shared-with-deps-latest.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu102/libtorch-cxx11-abi-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu102/libtorch-cxx11-abi-shared-with-deps-latest.zip</a>",


		"preview,libtorch,linux,cuda11.x,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu1133/libtorch-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu1133/libtorch-shared-with-deps-latest.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu113/libtorch-cxx11-abi-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu113/libtorch-cxx11-abi-shared-with-deps-latest.zip</a>",



		"preview,libtorch,linux,rocm4.2,cplusplus": "LibTorch binaries are not available for ROCm, please build it from source",


		"preview,pip,macos,cuda10.2,python": "# On MacOS, we provide CPU-only packages, CUDA functionality is not provided<br />pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html",



		"preview,pip,macos,cuda11.x,python": "# On MacOS, we provide CPU-only packages, CUDA functionality is not provided<br />pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html",



		"preview,pip,macos,rocm4.2,python": "# ROCm is not available on MacOS<br />pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html",
		"preview,pip,macos,accnone,python": "pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html",



		"preview,conda,macos,cuda10.2,python": "conda install pytorch torchvision torchaudio -c pytorch-nightly",

		
		"preview,conda,macos,cuda11.x,python": "conda install pytorch torchvision torchaudio -c pytorch-nightly",


		"preview,conda,macos,rocm4.2,python": "<b>NOTE:</b> ROCm is not available on MacOS",
		"preview,conda,macos,accnone,python": "conda install pytorch torchvision torchaudio -c pytorch-nightly",



		"preview,libtorch,macos,accnone,cplusplus": "Download here:<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip</a>",



		"preview,libtorch,macos,cuda10.2,cplusplus": "MacOS binaries do not support CUDA. Download CPU libtorch here:<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip</a>",



		"preview,libtorch,macos,cuda11.x,cplusplus": "MacOS binaries do not support CUDA. Download CPU libtorch here:<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip</a>",



		"preview,libtorch,macos,rocm4.2,cplusplus": "ROCm is not available on MacOS. Download CPU libtorch here:<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-macos-latest.zip</a>",



		"preview,pip,windows,accnone,python": "pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html",



		"preview,pip,windows,cuda10.2,python": "pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cu102/torch_nightly.html",



		"preview,pip,windows,cuda11.x,python": "pip3 install --pre torch torchvision torchaudio -f https://download.pytorch.org/whl/nightly/cu113/torch_nightly.html",



		"preview,pip,windows,rocm4.2,python": "<b>NOTE:</b> ROCm is not available on Windows",


		"preview,conda,windows,cuda10.2,python": "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-nightly",



		"preview,conda,windows,cuda11.x,python": "conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch-nightly",



		"preview,conda,windows,rocm4.2,python": "<b>NOTE:</b> ROCm is not available on Windows",



		"preview,conda,windows,accnone,python": "conda install pytorch torchvision torchaudio cpuonly -c pytorch-nightly",



		"preview,libtorch,windows,accnone,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-latest.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-debug-latest.zip'>https://download.pytorch.org/libtorch/nightly/cpu/libtorch-win-shared-with-deps-debug-latest.zip</a>",



		"preview,libtorch,windows,cuda10.2,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu102/libtorch-win-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu102/libtorch-win-shared-with-deps-latest.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu102/libtorch-win-shared-with-deps-debug-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu102/libtorch-win-shared-with-deps-debug-latest.zip</a>",



		"preview,libtorch,windows,cuda11.x,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-latest.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-debug-latest.zip'>https://download.pytorch.org/libtorch/nightly/cu113/libtorch-win-shared-with-deps-debug-latest.zip</a>",




		"preview,libtorch,windows,rocm4.2,cplusplus": "<b>NOTE:</b> ROCm is not available on Windows",
		"lts,pip,linux,accnone,python": "pip3 install torch==1.8.2+cpu torchvision==0.9.2+cpu torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html",



		"lts,pip,linux,cuda10.2,python": "pip3 install torch==1.8.2+cu102 torchvision==0.9.2+cu102 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html",




		"lts,pip,linux,cuda11.x,python": "pip3 install torch==1.8.2+cu111 torchvision==0.9.2+cu111 torchaudio==0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html",




		"lts,pip,linux,rocm4.2,python": "<b>NOTE:</b> ROCm is not supported in LTS",



		"lts,conda,linux,cuda10.2,python": "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lts",



		"lts,conda,linux,cuda11.x,python": "<b>NOTE:</b> 'nvidia' channel is required for cudatoolkit 11.1<br />conda install pytorch torchvision torchaudio cudatoolkit=11.1 -c pytorch-lts -c nvidia",



		"lts,conda,linux,rocm4.2,python": "<b>NOTE:</b> ROCm is not supported in LTS",



		"lts,conda,linux,accnone,python": "conda install pytorch torchvision torchaudio cpuonly -c pytorch-lts",



		"lts,libtorch,linux,accnone,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-shared-with-deps-1.8.2%2Bcpu.zip'>https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-shared-with-deps-1.8.2%2Bcpu.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcpu.zip'>https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcpu.zip</a>",




		"lts,libtorch,linux,cuda10.2,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-shared-with-deps-1.8.2%2Bcu102.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-shared-with-deps-1.8.2%2Bcu102.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu102.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu102.zip</a>",



		"lts,libtorch,linux,cuda11.x,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-shared-with-deps-1.8.2%2Bcu111.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-shared-with-deps-1.8.2%2Bcu111.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu111.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-cxx11-abi-shared-with-deps-1.8.2%2Bcu111.zip</a>",




		"lts,libtorch,linux,rocm4.2,cplusplus": "<b>NOTE:</b> ROCm is not supported in LTS",



		"lts,pip,macos,cuda10.2,python": "# macOS is not currently supported for lts",



		"lts,pip,macos,cuda11.x,python": "# macOS is not currently supported for lts",



		"lts,pip,macos,rocm4.2,python": "# macOS is not currently supported for lts",



		"lts,pip,macos,accnone,python": "# macOS is not currently supported for lts",



		"lts,conda,macos,cuda10.2,python": "# macOS is not currently supported for lts",



		"lts,conda,macos,cuda11.x,python": "# macOS is not currently supported for lts",



		"lts,conda,macos,rocm4.2,python": "# macOS is not currently supported for lts",



		"lts,conda,macos,accnone,python": "# macOS is not currently supported for lts",



		"lts,libtorch,macos,accnone,cplusplus": "# macOS is not currently supported for lts",


		"lts,libtorch,macos,cuda10.2,cplusplus": "# macOS is not currently supported for lts",



		"lts,libtorch,macos,cuda11.x,cplusplus": "# macOS is not currently supported for lts",



		"lts,libtorch,macos,rocm4.2,cplusplus": "# macOS is not currently supported for lts",



		"lts,pip,windows,accnone,python": "pip3 install torch==1.8.2+cpu torchvision==0.9.2+cpu torchaudio===0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html",



		"lts,pip,windows,cuda10.2,python": "pip3 install torch==1.8.2+cu102 torchvision==0.9.2+cu102 torchaudio===0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html",



		"lts,pip,windows,cuda11.x,python": "pip3 install torch==1.8.2+cu111 torchvision==0.9.2+cu111 torchaudio===0.8.2 -f https://download.pytorch.org/whl/lts/1.8/torch_lts.html",



		"lts,pip,windows,rocm4.2,python": "<b>NOTE:</b> ROCm is not supported in LTS",



		"lts,conda,windows,cuda10.2,python": "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch-lts",



		"lts,conda,windows,cuda11.x,python": "<b>NOTE:</b> 'conda-forge' channel is required for cudatoolkit 11.1<br />conda install pytorch torchvision torchaudio cudatoolkit=11.1 -c pytorch-lts -c conda-forge",



		"lts,conda,windows,rocm4.2,python": "<b>NOTE:</b> ROCm is not supported in LTS",



		"lts,conda,windows,accnone,python": "conda install pytorch torchvision torchaudio cpuonly -c pytorch-lts",



		"lts,libtorch,windows,accnone,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-1.8.2%2Bcpu.zip'>https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-1.8.2%2Bcpu.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-debug-1.8.2%2Bcpu.zip'>https://download.pytorch.org/libtorch/lts/1.8/cpu/libtorch-win-shared-with-deps-debug-1.8.2%2Bcpu.zip</a>",



		"lts,libtorch,windows,cuda10.2,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-1.8.2%2Bcu102.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-1.8.2%2Bcu102.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu102.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu102/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu102.zip</a>",



		"lts,libtorch,windows,cuda11.x,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-1.8.2%2Bcu111.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-1.8.2%2Bcu111.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu111.zip'>https://download.pytorch.org/libtorch/lts/1.8/cu111/libtorch-win-shared-with-deps-debug-1.8.2%2Bcu111.zip</a>",



		"lts,libtorch,windows,rocm4.2,cplusplus": "<b>NOTE:</b> ROCm is not supported in LTS",



		"stable,pip,linux,accnone,python": "pip3 install torch==1.10.1+cpu torchvision==0.11.2+cpu torchaudio==0.10.1+cpu -f https://download.pytorch.org/whl/cpu/torch_stable.html",




		"stable,pip,linux,cuda10.2,python": "pip3 install torch torchvision torchaudio",



		"stable,pip,linux,cuda11.x,python": "pip3 install torch==1.10.1+cu113 torchvision==0.11.2+cu113 torchaudio==0.10.1+cu113 -f https://download.pytorch.org/whl/cu113/torch_stable.html",




		"stable,pip,linux,rocm4.2,python": "pip3 install torch torchvision==0.11.2 -f https://download.pytorch.org/whl/rocm4.2/torch_stable.html",




		"stable,conda,linux,cuda10.2,python": "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch",



		"stable,conda,linux,cuda11.x,python": "conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch",




		"stable,conda,linux,rocm4.2,python": "<b>NOTE:</b> Conda packages are not currently available for ROCm, please use pip instead<br />",



		"stable,conda,linux,accnone,python": "conda install pytorch torchvision torchaudio cpuonly -c pytorch",



		"stable,libtorch,linux,accnone,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/cpu/libtorch-shared-with-deps-1.10.1%2Bcpu.zip'>https://download.pytorch.org/libtorch/cpu/libtorch-shared-with-deps-1.10.1%2Bcpu.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/cpu/libtorch-cxx11-abi-shared-with-deps-1.10.1%2Bcpu.zip'>https://download.pytorch.org/libtorch/cpu/libtorch-cxx11-abi-shared-with-deps-1.10.1%2Bcpu.zip</a>",



		"stable,libtorch,linux,cuda10.2,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.10.1%2Bcu102.zip'>https://download.pytorch.org/libtorch/cu102/libtorch-shared-with-deps-1.10.1%2Bcu102.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.10.1%2Bcu102.zip'>https://download.pytorch.org/libtorch/cu102/libtorch-cxx11-abi-shared-with-deps-1.10.1%2Bcu102.zip</a>",



		"stable,libtorch,linux,cuda11.x,cplusplus": "Download here (Pre-cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/cu113/libtorch-shared-with-deps-1.10.1%2Bcu113.zip'>https://download.pytorch.org/libtorch/cu113/libtorch-shared-with-deps-1.10.1%2Bcu113.zip</a><br />Download here (cxx11 ABI):<br /><a href='https://download.pytorch.org/libtorch/cu113/libtorch-cxx11-abi-shared-with-deps-1.10.1%2Bcu113.zip'>https://download.pytorch.org/libtorch/cu113/libtorch-cxx11-abi-shared-with-deps-1.10.1%2Bcu113.zip</a>",



		"stable,libtorch,linux,rocm4.2,cplusplus": "LibTorch binaries are not available for ROCm, please build it from source",




		"stable,pip,macos,cuda10.2,python": "# MacOS Binaries dont support CUDA, install from source if CUDA is needed<br />pip3 install torch torchvision torchaudio",



		"stable,pip,macos,cuda11.x,python": "# MacOS Binaries dont support CUDA, install from source if CUDA is needed<br />pip3 install torch torchvision torchaudio",




		"stable,pip,macos,rocm4.2,python": "<b>NOTE:</b> ROCm is not available on MacOS",



		"stable,pip,macos,accnone,python": "pip3 install torch torchvision torchaudio",




		"stable,conda,macos,cuda10.2,python": "# MacOS Binaries dont support CUDA, install from source if CUDA is needed<br />conda install pytorch torchvision torchaudio -c pytorch",




		"stable,conda,macos,cuda11.x,python": "# MacOS Binaries dont support CUDA, install from source if CUDA is needed<br />conda install pytorch torchvision torchaudio -c pytorch",



		"stable,conda,macos,rocm4.2,python": "<b>NOTE:</b> ROCm is not available on MacOS",



		"stable,conda,macos,accnone,python": "conda install pytorch torchvision torchaudio -c pytorch",



		"stable,libtorch,macos,accnone,cplusplus": "Download here:<br /><a href='https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.10.1.zip'>https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.10.1.zip</a>",



		"stable,libtorch,macos,cuda10.2,cplusplus": "MacOS binaries do not support CUDA. Download CPU libtorch here:<br /><a href='https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.10.1.zip'>https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.10.1.zip</a>",




		"stable,libtorch,macos,cuda11.x,cplusplus": "MacOS binaries do not support CUDA. Download CPU libtorch here:<br /><a href='https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.10.1.zip'>https://download.pytorch.org/libtorch/cpu/libtorch-macos-1.10.1.zip</a>",




		"stable,libtorch,macos,rocm4.2,cplusplus": "<b>NOTE:</b> ROCm is not available on MacOS",



		"stable,pip,windows,accnone,python": "pip3 install torch torchvision torchaudio",



		"stable,pip,windows,cuda10.2,python": "pip3 install torch==1.10.1+cu102 torchvision==0.11.2+cu102 torchaudio===0.10.1+cu102 -f https://download.pytorch.org/whl/cu102/torch_stable.html",



		"stable,pip,windows,cuda11.x,python": "pip3 install torch==1.10.1+cu113 torchvision==0.11.2+cu113 torchaudio===0.10.1+cu113 -f https://download.pytorch.org/whl/cu113/torch_stable.html",




		"stable,pip,windows,rocm4.2,python": "<b>NOTE:</b> ROCm is not available on Windows",



		"stable,conda,windows,cuda10.2,python": "conda install pytorch torchvision torchaudio cudatoolkit=10.2 -c pytorch",



		"stable,conda,windows,cuda11.x,python": "conda install pytorch torchvision torchaudio cudatoolkit=11.3 -c pytorch",



		"stable,conda,windows,rocm4.2,python": "<b>NOTE:</b> ROCm is not available on Windows",



		"stable,conda,windows,accnone,python": "conda install pytorch torchvision torchaudio cpuonly -c pytorch",



		"stable,libtorch,windows,accnone,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-1.10.1%2Bcpu.zip'>https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-1.10.1%2Bcpu.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-debug-1.10.1%2Bcpu.zip'>https://download.pytorch.org/libtorch/cpu/libtorch-win-shared-with-deps-debug-1.10.1%2Bcpu.zip</a>",




		"stable,libtorch,windows,cuda10.2,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/cu102/libtorch-win-shared-with-deps-1.10.1%2Bcu102.zip'>https://download.pytorch.org/libtorch/cu102/libtorch-win-shared-with-deps-1.10.1%2Bcu102.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/cu102/libtorch-win-shared-with-deps-debug-1.10.1%2Bcu102.zip'>https://download.pytorch.org/libtorch/cu102/libtorch-win-shared-with-deps-debug-1.10.1%2Bcu102.zip</a>",



		"stable,libtorch,windows,cuda11.x,cplusplus": "Download here (Release version):<br /><a href='https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-1.10.1%2Bcu113.zip'>https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-1.10.1%2Bcu113.zip</a><br />Download here (Debug version):<br /><a href='https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-debug-1.10.1%2Bcu113.zip'>https://download.pytorch.org/libtorch/cu113/libtorch-win-shared-with-deps-debug-1.10.1%2Bcu113.zip</a>",



		"stable,libtorch,windows,rocm4.2,cplusplus": "<b>NOTE:</b> ROCm is not available on Windows"

		
	};
/* Assigns Command according to selected */