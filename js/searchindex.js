Search.setIndex({docnames:["acquisition","exceptions","fit","gen","index","models","optim","posteriors","sampling","test_functions","utils"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["acquisition.rst","exceptions.rst","fit.rst","gen.rst","index.rst","models.rst","optim.rst","posteriors.rst","sampling.rst","test_functions.rst","utils.rst"],objects:{"botorch.acquisition":{acquisition:[0,0,0,"-"],analytic:[0,0,0,"-"],monte_carlo:[0,0,0,"-"],objective:[0,0,0,"-"],utils:[0,0,0,"-"]},"botorch.acquisition.acquisition":{AcquisitionFunction:[0,1,1,""]},"botorch.acquisition.acquisition.AcquisitionFunction":{forward:[0,2,1,""]},"botorch.acquisition.analytic":{AnalyticAcquisitionFunction:[0,1,1,""],ConstrainedExpectedImprovement:[0,1,1,""],ExpectedImprovement:[0,1,1,""],NoisyExpectedImprovement:[0,1,1,""],PosteriorMean:[0,1,1,""],ProbabilityOfImprovement:[0,1,1,""],UpperConfidenceBound:[0,1,1,""]},"botorch.acquisition.analytic.ConstrainedExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.ExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.NoisyExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.PosteriorMean":{forward:[0,2,1,""]},"botorch.acquisition.analytic.ProbabilityOfImprovement":{forward:[0,2,1,""]},"botorch.acquisition.analytic.UpperConfidenceBound":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo":{MCAcquisitionFunction:[0,1,1,""],qExpectedImprovement:[0,1,1,""],qNoisyExpectedImprovement:[0,1,1,""],qProbabilityOfImprovement:[0,1,1,""],qSimpleRegret:[0,1,1,""],qUpperConfidenceBound:[0,1,1,""]},"botorch.acquisition.monte_carlo.MCAcquisitionFunction":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qNoisyExpectedImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qProbabilityOfImprovement":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qSimpleRegret":{forward:[0,2,1,""]},"botorch.acquisition.monte_carlo.qUpperConfidenceBound":{forward:[0,2,1,""]},"botorch.acquisition.objective":{ConstrainedMCObjective:[0,1,1,""],GenericMCObjective:[0,1,1,""],IdentityMCObjective:[0,1,1,""],LinearMCObjective:[0,1,1,""],MCAcquisitionObjective:[0,1,1,""]},"botorch.acquisition.objective.ConstrainedMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.GenericMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.IdentityMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.LinearMCObjective":{forward:[0,2,1,""]},"botorch.acquisition.objective.MCAcquisitionObjective":{forward:[0,2,1,""]},"botorch.acquisition.utils":{get_acquisition_function:[0,3,1,""],get_infeasible_cost:[0,3,1,""],is_nonnegative:[0,3,1,""]},"botorch.exceptions":{errors:[1,0,0,"-"],warnings:[1,0,0,"-"]},"botorch.exceptions.errors":{BotorchError:[1,1,1,""],CandidateGenerationError:[1,1,1,""],UnsupportedError:[1,1,1,""]},"botorch.exceptions.warnings":{BadInitialCandidatesWarning:[1,1,1,""],BotorchWarning:[1,1,1,""]},"botorch.fit":{fit_gpytorch_model:[2,3,1,""]},"botorch.gen":{gen_candidates_scipy:[3,3,1,""],gen_candidates_torch:[3,3,1,""],get_best_candidates:[3,3,1,""]},"botorch.models.gp_regression":{FixedNoiseGP:[5,1,1,""],HeteroskedasticSingleTaskGP:[5,1,1,""],SingleTaskGP:[5,1,1,""]},"botorch.models.gp_regression.FixedNoiseGP":{fantasize:[5,2,1,""],forward:[5,2,1,""]},"botorch.models.gp_regression.HeteroskedasticSingleTaskGP":{condition_on_observations:[5,2,1,""]},"botorch.models.gpytorch":{BatchedMultiOutputGPyTorchModel:[5,1,1,""],GPyTorchModel:[5,1,1,""],ModelListGPyTorchModel:[5,1,1,""],MultiTaskGPyTorchModel:[5,1,1,""]},"botorch.models.gpytorch.BatchedMultiOutputGPyTorchModel":{condition_on_observations:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.gpytorch.GPyTorchModel":{condition_on_observations:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.gpytorch.ModelListGPyTorchModel":{condition_on_observations:[5,2,1,""],num_outputs:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.gpytorch.MultiTaskGPyTorchModel":{posterior:[5,2,1,""]},"botorch.models.model":{Model:[5,1,1,""]},"botorch.models.model.Model":{condition_on_observations:[5,2,1,""],fantasize:[5,2,1,""],posterior:[5,2,1,""]},"botorch.models.model_list_gp_regression":{ModelListGP:[5,1,1,""]},"botorch.models.model_list_gp_regression.ModelListGP":{condition_on_observations:[5,2,1,""]},"botorch.models.multitask":{FixedNoiseMultiTaskGP:[5,1,1,""],MultiTaskGP:[5,1,1,""]},"botorch.models.multitask.MultiTaskGP":{forward:[5,2,1,""]},"botorch.optim":{fit:[6,0,0,"-"],initializers:[6,0,0,"-"],numpy_converter:[6,0,0,"-"],optimize:[6,0,0,"-"],parameter_constraints:[6,0,0,"-"],utils:[6,0,0,"-"]},"botorch.optim.fit":{OptimizationIteration:[6,1,1,""],fit_gpytorch_scipy:[6,3,1,""],fit_gpytorch_torch:[6,3,1,""]},"botorch.optim.fit.OptimizationIteration":{fun:[6,2,1,""],itr:[6,2,1,""],time:[6,2,1,""]},"botorch.optim.initializers":{initialize_q_batch:[6,3,1,""],initialize_q_batch_nonneg:[6,3,1,""]},"botorch.optim.numpy_converter":{TorchAttr:[6,1,1,""],module_to_array:[6,3,1,""],set_params_with_array:[6,3,1,""]},"botorch.optim.numpy_converter.TorchAttr":{device:[6,2,1,""],dtype:[6,2,1,""],shape:[6,2,1,""]},"botorch.optim.optimize":{gen_batch_initial_conditions:[6,3,1,""],joint_optimize:[6,3,1,""],sequential_optimize:[6,3,1,""]},"botorch.optim.parameter_constraints":{eval_lin_constraint:[6,3,1,""],lin_constraint_jac:[6,3,1,""],make_scipy_bounds:[6,3,1,""],make_scipy_linear_constraints:[6,3,1,""]},"botorch.optim.utils":{check_convergence:[6,3,1,""],columnwise_clamp:[6,3,1,""],fix_features:[6,3,1,""]},"botorch.posteriors":{gpytorch:[7,0,0,"-"],posterior:[7,0,0,"-"]},"botorch.posteriors.gpytorch":{GPyTorchPosterior:[7,1,1,""]},"botorch.posteriors.gpytorch.GPyTorchPosterior":{device:[7,2,1,""],dtype:[7,2,1,""],event_shape:[7,2,1,""],mean:[7,2,1,""],rsample:[7,2,1,""],variance:[7,2,1,""]},"botorch.posteriors.posterior":{Posterior:[7,1,1,""]},"botorch.posteriors.posterior.Posterior":{device:[7,2,1,""],dtype:[7,2,1,""],event_shape:[7,2,1,""],mean:[7,2,1,""],rsample:[7,2,1,""],sample:[7,2,1,""],variance:[7,2,1,""]},"botorch.sampling":{qmc:[8,0,0,"-"],samplers:[8,0,0,"-"]},"botorch.sampling.qmc":{MultivariateNormalQMCEngine:[8,1,1,""],NormalQMCEngine:[8,1,1,""]},"botorch.sampling.qmc.MultivariateNormalQMCEngine":{draw:[8,2,1,""]},"botorch.sampling.qmc.NormalQMCEngine":{draw:[8,2,1,""]},"botorch.sampling.samplers":{IIDNormalSampler:[8,1,1,""],MCSampler:[8,1,1,""],SobolQMCNormalSampler:[8,1,1,""]},"botorch.sampling.samplers.MCSampler":{collapse_batch_dims:[8,4,1,""],forward:[8,2,1,""],resample:[8,4,1,""],sample_shape:[8,4,1,""]},"botorch.test_functions":{neg_aug_branin:[9,3,1,""],neg_aug_hartmann6:[9,3,1,""],neg_aug_rosenbrock:[9,3,1,""],neg_branin:[9,3,1,""],neg_eggholder:[9,3,1,""],neg_hartmann6:[9,3,1,""],neg_holder_table:[9,3,1,""],neg_michalewicz:[9,3,1,""],neg_styblinski_tang:[9,3,1,""]},"botorch.utils":{constraints:[10,0,0,"-"],objective:[10,0,0,"-"],sampling:[10,0,0,"-"],transforms:[10,0,0,"-"]},"botorch.utils.constraints":{get_outcome_constraint_transforms:[10,3,1,""]},"botorch.utils.objective":{apply_constraints:[10,3,1,""],apply_constraints_nonnegative_soft:[10,3,1,""],get_objective_weights_transform:[10,3,1,""],soft_eval_constraint:[10,3,1,""]},"botorch.utils.sampling":{construct_base_samples:[10,3,1,""],construct_base_samples_from_posterior:[10,3,1,""],draw_sobol_normal_samples:[10,3,1,""],draw_sobol_samples:[10,3,1,""],manual_seed:[10,3,1,""]},"botorch.utils.transforms":{convert_to_target_pre_hook:[10,3,1,""],match_batch_shape:[10,3,1,""],normalize:[10,3,1,""],squeeze_last_dim:[10,3,1,""],standardize:[10,3,1,""],t_batch_mode_transform:[10,3,1,""],unnormalize:[10,3,1,""]},botorch:{exceptions:[1,0,0,"-"],fit:[2,0,0,"-"],gen:[3,0,0,"-"],models:[5,0,0,"-"],optim:[6,0,0,"-"],posteriors:[7,0,0,"-"],sampling:[8,0,0,"-"],test_functions:[9,0,0,"-"],utils:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute"},terms:{"0th":0,"1st":0,"3pi":9,"abstract":[0,7,8],"boolean":6,"case":[0,7,10],"class":[0,1,3,5,6,7,8,10],"default":[0,5,8,10],"float":[0,3,6,10],"function":[0,2,3,5,6,8,9,10],"int":[0,3,5,6,8,10],"long":[5,6],"new":[5,6],"return":[0,2,3,5,6,7,8,9,10],"true":[0,3,5,6,8,10],"while":5,For:[0,6,10],GPs:5,One:5,THe:0,The:[0,2,3,5,6,7,8,9,10],These:0,Use:5,Uses:0,__call__:[0,8],_construct_base_sampl:8,_joint_optim:6,_sequential_optim:6,a_1j:9,a_ij:9,abl:[0,5],accord:6,accordingli:6,accur:0,acq_funct:[0,6],acqf:0,acquisit:[3,4,6,8],acquisition_funct:3,acquisition_function_nam:0,acquisitionfunct:6,acquisiton:6,across:[5,6,8,10],adam:[3,6],add:[5,10],added:[0,5],addit:0,addition:6,after:6,afterward:5,algorithm:8,alia:6,all:[0,3,5,6,7],allow:[0,5,10],almost:0,along:[2,6],alpha:6,alpha_1:9,alpha_i:9,alreadi:[0,6],also:[5,10],although:5,alwai:0,ani:[2,3,5,6,10],anoth:[5,10],appear:6,appendix:0,appli:[0,6,10],applic:8,apply_constraint:[0,10],apply_constraints_nonnegative_soft:10,appropri:[6,7],approxim:[0,10],arbitrari:0,arbitrary_q_method:10,area:6,arg:10,argument:[2,5],arrai:6,arxiv:0,assertitionerror:10,associ:[0,3,6],assum:[0,3,5,6,10],attribut:6,augment:9,auto:0,automat:10,averag:[0,10],b_min:9,backpropag:0,bad:1,baed:5,base:[0,1,5,6,7,8,10],base_sampl:7,basic:10,batch:[0,3,5,6,7,8,9,10],batch_acq_valu:3,batch_candid:3,batch_shap:[0,5,10],batch_shape_i:10,batch_shape_x:10,batch_valu:3,becom:10,been:[0,5],behavior:0,being:[0,5],benchmark:9,best:[0,3,5],best_candid:3,best_f:[0,3,6],beta:[0,6],better:[0,3],between:[0,5],bfg:6,block:5,bool:[0,3,5,6,8,10],both:6,bound:[0,3,6,10],bounds_out:6,box:[8,10],branin:9,broadcast:[5,6,10],cach:5,calcul:6,call:[0,5,6,7,8,10],callabl:[0,2,3,6,10],can:[5,6,10],candid:[0,1,3,6],care:5,carlo:[0,8],cat:5,cei:0,check:[6,10],check_converg:6,clamp:[3,6],classic:0,closur:6,coeff:6,coeffici:[3,6],collaps:8,collapse_batch_dim:[0,8,10],column:[3,5,6,10],columnwise_clamp:6,combin:0,come:5,compat:[3,5,10],complex:0,compris:0,comput:[0,5,10],concaten:0,condit:[5,6],condition_on_observ:5,confid:0,conjunct:6,consid:[0,5,6],constant:9,constarint:0,constrain:[0,6,10],constrained_ei:0,constrained_object:0,constraint:[0,3,6],constraint_i:0,construct:[0,5,10],construct_base_sampl:10,construct_base_samples_from_posterior:10,constructor:0,contain:[3,5,6,10],contextmanag:10,control:[0,3],conveni:[0,5],converg:6,convert:[3,6],convert_to_target_pre_hook:10,correl:5,correspond:[5,6,10],cos:[5,9],cost:[0,5],cov:8,covari:[0,5,8],cover:0,creat:[6,10],cube:5,current:[0,1,5,6],custom:[0,6],data:[5,8,10],decor:10,deep:0,def:10,defin:[5,10],deisenroth:0,deriv:5,descent:6,design:[0,5,6],desir:8,detach:5,detail:0,determin:[0,10],determinist:[0,7,8],deviat:0,devic:[6,7,10],diagnost:6,dict:[0,3,6],dictionari:[0,3,6],differ:5,differnti:0,dim:[0,5,6,7,9,10],dimens:[0,5,6,7,8,9,10],dimension:[0,6,9,10],direct:10,directli:[0,8],disp:6,displai:6,distribut:[0,5,7,8,10],document:0,doe:[0,5,6,10],domain:9,don:6,downstream:6,draw:[0,7,8,10],draw_sobol_normal_sampl:10,draw_sobol_sampl:10,drawn:[5,8,10],dtype:[6,7,8,10],dummi:6,dure:[1,6],each:[0,3,5,6,7,8,10],easiest:5,egghold:9,either:[0,6],element:[0,3,6,10],elimin:10,empti:6,enabl:6,encod:[3,6],enforc:6,engin:8,entri:6,equal:[3,6,10],equality_constraint:[3,6],error:5,estim:0,eta:[0,6,10],eval:6,eval_lin_constraint:6,evalu:[0,5,6,8,9,10],evalut:6,event:7,event_shap:[7,10],everi:5,exact:5,exactgp:5,exactli:0,exactmarginalloglikelihood:[2,6],exampl:[0,2,3,5,6,8,10],exampleclass:10,except:4,exclud:6,exp:[6,9,10],expand:[0,10],expect:[0,6,10],expected_q:10,expens:0,extend:0,extract:[0,3,6],f_min:9,factori:10,fake:5,fals:[0,5,6,8],fanci:6,fantas:5,fantasi:[0,5],far:0,fashion:[5,6,10],feasibilti:0,feasibl:[0,10],featur:[1,3,5,6],feature_index:6,fewer:5,fidel:9,field:6,financ:8,finit:6,first:6,fit:[0,4],fit_gpytorch_model:2,fit_gpytorch_scipi:[2,6],fit_gpytorch_torch:6,fix:[0,3,5,6],fix_featur:6,fixed_featur:[3,6],fixednoisegp:0,flat_idxr:6,flexibl:5,float32:8,follow:[5,6,8,10],form:[0,3,6],format:5,former:5,formula:0,forward:[0,5,8,10],fraction:6,from:[0,3,5,6,7,8,10],full:5,full_lik:5,fun:6,gaussian:0,gaussianlikelihood:5,gen:4,gen_batch_initial_condit:[3,6],gen_candidates_scipi:3,gen_candidates_torch:3,gener:[0,1,3,5,6,8,10],generic_object:0,get:[0,6],get_acquisition_funct:0,get_best_candid:3,get_infeasible_cost:0,get_objective_weights_transform:10,get_outcome_constraint_transform:10,given:0,global:9,gp_model:5,gp_regress:5,gpytorch:[2,6],gpytorchmodel:0,gpytorchposterior:5,gradient:[0,6,7],greedi:0,grow:10,h_min:9,hand:[6,10],handl:[0,6,10],hartmann6:9,has:[0,5,6,9,10],have:[0,3,5,6],heavisid:10,helper:10,here:[5,6,9,10],heteroskeast:5,heteroskedast:5,heurist:6,higher:[0,3],highest:3,holder:9,hook:[5,10],hutter:0,hypercub:9,hyperparamet:[2,5],i_d:[8,10],i_qo:10,icm:5,icml:0,ident:10,identity_object:0,ignor:[5,6,8],iid:[0,8,10],implement:[0,5,8],impli:[0,10],importantli:10,improv:0,improvemnt:0,includ:[3,5,6],independ:[0,5],index:[0,4,5,6],indic:[0,3,5,6,10],individu:[0,5],ineq:6,inequ:[3,6],inequality_constraint:[3,6],inf:0,infeas:[0,10],infeasible_cost:[0,10],infer:[0,5],infinit:9,inform:6,initi:[0,1,3,10],initial_condit:3,initialize_q_batch:6,initialize_q_batch_nonneg:6,input:[0,5,6,10],instanc:[0,5,6,10],instead:[0,5,6,8,10],interfac:5,intern:[5,8],interpret:0,introduc:10,introduct:8,inv_transform:8,invers:8,involv:0,is_nonneg:0,issu:1,iter:[3,6],itr:6,its:[5,9],jacobian:6,joint:[0,5,6],joint_optim:6,jointli:[5,6],just:[3,5,6],kei:6,kernel:5,known:[0,5],kwarg:[0,2,5],lambda:0,larg:6,larger:10,last:[0,6,9,10],latter:5,least:[6,10],left:10,length:6,less:6,level:5,lhs:10,like:0,likelihood:[2,5,6],lin_constraint_jac:6,linear:[0,6,10],linear_object:0,list:[0,3,5,6,10],local:9,loss:6,loss_trajectori:6,lower:[0,6,10],lower_bound:[3,6],lower_i:0,mai:6,make:[5,10],make_scipy_bound:6,make_scipy_linear_constraint:6,mani:9,manual:10,manual_se:10,map:[0,6,10],margin:0,marginalloglikelihood:[2,6],match:[6,10],match_batch_shap:10,math:9,matrix:8,max:[0,6,10],maxim:[0,2,6],maximum:[3,6],maxit:[3,6],mc_acq:0,mc_obj:0,mc_sampl:[0,10],mcsampler:[0,5],mean:[0,5,6,7,8],meant:[5,6],measur:5,method:[0,3,5,6,8,10],michalewicz:9,min:10,min_x:0,minim:[3,6,9],minima:9,minimum:[0,3,9],mininimum:9,miss:5,mll:[2,6],mode:[0,3,5,6,10],model1:5,model2:5,model:[0,2,3,4,6,7,8,10],model_list_gp_regress:5,modellist:5,modul:[0,3,4,5,6,7,8,10],module_to_arrai:6,moham:0,mont:[0,8],more:0,moriconi:0,muller:8,multi:[0,5,6,7,10],multipl:5,multistart:6,multitask:5,multitaskmultivariatenorm:7,multivari:8,multivariatenorm:[5,7],must:[0,5,6,8,10],mvn:7,n_i:5,n_param:6,n_sampl:10,name:[0,6],named_parameters_and_constraint:6,nativ:6,ndarrai:6,need:5,neg:[0,6,9,10],neg_aug_branin:9,neg_aug_hartmann6:9,neg_aug_rosenbrock:9,neg_branin:9,neg_egghold:9,neg_hartmann6:9,neg_holder_t:9,neg_michalewicz:9,neg_styblinski_tang:9,nei:0,new_i:5,new_x:5,no_grad:7,nois:5,noiseless:0,noisi:0,non:[0,6,10],none:[0,3,5,6,7,8,10],nonneg:[6,10],norm:5,normal:[0,5,7,8,10],note:[0,6],now:6,num_fantasi:0,num_output:5,num_restart:[3,6],num_sampl:[0,8,10],number:[0,3,5,6,8,10],numer:8,numpi:[3,6],obj:[0,10],object:[5,6,7],objective_index:0,observ:[0,5,6],observation_nois:5,observatioon:5,obtain:[7,10],off:0,omit:[5,8],one:[0,5,6],ones:[5,10],onli:[0,5,6,10],optim:[0,2,3,4,5,7,8,10],optimizationiter:6,optimizer_cl:6,optimzi:[1,6],option:[0,3,5,6,7,8,10],order:[0,6],origin:[5,10],other:5,otherwis:[6,8],out:[5,8],outcom:[0,5,6,10],outcome_constraint:10,output:[0,3,5,7,8,10],output_indic:5,output_shap:10,output_task:5,over:[0,5,6,10],overridden:5,owen:10,own:5,p_1j:9,p_ij:9,packag:6,page:[4,8],pages2018numprob:8,param_trajectori:6,paramet:[0,2,3,5,6,7,8,9,10],parameter_arrai:6,parameterbound:6,particular:6,pass:[0,2,5,6],pend:0,per:5,perform:[0,3,5],perturb:6,place:6,pleas:5,plu:0,point:[0,3,5,6],posit:[6,10],possibl:[0,5,6],post:6,post_processing_func:6,posterior:[0,4,5,8,10],potenti:0,pre:10,preced:6,predict:5,prefer:0,prevent:8,previous:0,primari:10,prior:[5,10],probabl:[0,6,8],problem:0,process:6,prod_i:0,produc:[0,8],product_i:0,project:6,propagate_grad:5,properti:[0,5,6,7,8],property_dict:6,proport:6,provid:[0,3,5,8,10],publish:8,purpos:9,put:8,pytorch:[3,6],qei:[0,3,6],qexpectedimprov:[3,6],qmc:[0,6,10],qnei:0,qnoisyexpectedimprov:[5,6],qpi:0,qsr:0,quasi:[0,8,10],qucb:[0,6],qupperconfidencebound:6,rais:[1,10],rand:[5,6,10],rand_lik:5,random:[6,8,10],rang:6,rank:5,raw:6,raw_sampl:[3,6],recip:5,refer:8,regist:[5,6],regret:0,rel:5,relev:[6,10],reli:0,reparameter:0,replac:[0,6],repres:[0,5],represent:6,request:0,requir:[0,5,6],requires_grad:6,resampl:8,resp:0,respect:[0,3,5,10],restart:6,result:[0,6,8],rezend:0,rezende2014reparam:0,rhs:[3,6],right:6,rng:[8,10],rosenbrock:9,round:6,rsampl:7,run:5,same:[5,6,10],sampl:[0,4,5,6,7],sample_shap:[0,7,8,10],sampler:[0,5,7],scalabl:0,scalar:[0,6,10],scale:10,scipi:[3,6],scipy_bound:6,scrambl:10,search:[3,4],second:6,see:[0,5,6],seed:[0,8,10],select:[0,5,6],self:[0,10],semant:5,sequenc:8,sequenti:[5,6],sequential_optim:6,set:[0,1,3,6,7,8,10],set_params_with_arrai:6,shape:[0,5,6,7,8,10],shapex:6,shift:10,should:[0,5,6,8],side:[6,10],sigma:[0,8],sigmoid:[0,10],silent:5,similar:[5,6],simpl:[0,5,7],simplifi:6,sin:[5,9],sinc:[5,6],singl:[0,3,5,6,7,8,9,10],single_q_method:10,singletaskgp:[0,2,6],six:9,size:[3,6,7,8,9,10],smaller:0,sobol:8,sobolengin:8,sobolqmcnormalsampl:0,soft:10,soft_eval_constraint:10,softmax:10,solver:6,some:[0,10],sourc:[0,1,2,3,5,6,7,8,9,10],space:[0,5,6,10],specif:6,specifi:[5,6,7,10],speed:5,springer:8,sqrt:[0,9],squeez:10,squeeze_last_dim:[0,10],stack:[5,10],standard:[0,5,8,9,10],start:[3,6],std:6,step:[0,6,10],stochast:[0,8],str:[0,3,6],strategi:10,string:6,strong:5,structur:5,styblinski:9,style:5,sub:5,subclass:[5,8],subject:0,submodel:5,subset:5,sum:0,sum_:[0,9],sum_i:[3,6],support:[0,5,6,10],synthet:9,t_batch_mode_transform:10,tabl:9,take:[0,5,6,10],taken:5,tang:9,task:[5,10],task_featur:5,tau:0,temperatur:[0,6,10],tensor:[0,3,5,6,7,8,9,10],term:0,test:[0,5,9],test_funct:4,test_x:[0,8],than:[5,6],them:5,thi:[0,3,5,6,7,8,10],those:10,though:5,threshold:6,through:0,thu:8,time:[5,6],todo:0,tool:6,torch:[0,3,5,6,7,8,10],torchattr:6,track:6,track_iter:6,trade:0,tradeoff:0,train:[5,6],train_i:[0,2,5,6],train_input:6,train_target:6,train_x1:5,train_x2:5,train_x:[0,2,5,6],train_y1:5,train_y2:5,train_yvar:[0,5],transform:[6,8],trick:0,trip:6,trivial:0,tupl:[0,3,6,10],two:[0,9],type:[0,2,3,5,6,7,8,9,10],typic:[6,7,9,10],ucb:0,under:[0,6],underli:8,union:[0,3,6],uniqu:9,unit:5,universitext:8,unknown:0,unlik:0,unnorm:10,unscal:10,unsupport:1,updat:[5,6],upper:[0,6,10],upper_bound:[3,6],upper_i:0,use:[0,3,5,6,8,10],used:[0,3,5,6,7,8,10],useful:[6,8],uses:[0,5,8,10],using:[0,3,5,6,7,8,10],usingth:10,usual:[0,8,9],util:[2,3,4],valid:6,valu:[0,3,6,9,10],variabl:5,varianc:[0,5,7,8,10],variat:[7,10],vector:8,verbos:3,veri:5,via:[0,3,5,6,8,10],wai:5,wall:6,warn:5,weight:[0,6,10],weigth:0,well:0,what:[0,6],when:[5,6],where:[0,3,5,6,9,10],whether:[0,6],which:[0,5,6,8],whose:[0,10],wierstra:0,wilson2017reparam:0,wilson:0,wise:[6,10],within:5,without:[0,6,7],work:5,would:0,wrap:5,wrapper:[5,7],x_1:[0,9],x_2:9,x_3:9,x_4:9,x_7:9,x_baselin:0,x_i:9,x_j:9,x_match:10,x_normal:10,x_observ:0,x_pend:0,x_q:0,x_standard:10,xinit:[3,6],xrnd:6,y_baselin:0,y_i:0,y_squeez:10,y_tild:0,yield:0,you:[5,6],z_1:9,z_2:9,z_3:9,z_4:9,z_i:9,zero:[5,6,10]},titles:["botorch.acquisition","botorch.exceptions","botorch.fit","botorch.gen","BoTorch API Reference","botorch.models","botorch.optim","botorch.posteriors","botorch.sampling","botorch.test_functions","botorch.utils"],titleterms:{"abstract":5,acquisit:0,acquisitionfunct:0,analyt:0,analyticacquisitionfunct:0,api:[4,5],badinitialcandidateswarn:1,batchedmultioutputgpytorchmodel:5,botorch:[0,1,2,3,4,5,6,7,8,9,10],botorcherror:1,botorchwarn:1,candidategenerationerror:1,constrainedexpectedimprov:0,constrainedmcobject:0,constraint:10,error:1,except:1,expectedimprov:0,fit:[2,6],fixednoisegp:5,fixednoisemultitaskgp:5,gen:3,genericmcobject:0,gpytorch:[5,7],gpytorchmodel:5,gpytorchposterior:7,heteroskedasticsingletaskgp:5,identitymcobject:0,iidnormalsampl:8,indic:4,initi:6,linearmcobject:0,mcacquisitionfunct:0,mcacquisitionobject:0,mcsampler:8,model:5,modellistgp:5,modellistgpytorchmodel:5,monte_carlo:0,multitaskgp:5,multitaskgpytorchmodel:5,multivariatenormalqmcengin:8,noisyexpectedimprov:0,normalqmcengin:8,numpy_convert:6,object:[0,10],optim:6,parameter_constraint:6,posterior:7,posteriormean:0,probabilityofimprov:0,qexpectedimprov:0,qmc:8,qnoisyexpectedimprov:0,qprobabilityofimprov:0,qsimpleregret:0,qupperconfidencebound:0,refer:4,regress:5,sampl:[8,10],sampler:8,singletaskgp:5,sobolqmcnormalsampl:8,tabl:4,test_funct:9,transform:10,unsupportederror:1,upperconfidencebound:0,util:[0,6,10],warn:1}})